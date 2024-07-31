import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconTrash } from "@tabler/icons-react";
import { toast } from "react-toastify";
import SectionHeader from "../ui/SectionHeader";
import SubmitButton from "../ui/form-elements/SubmitButton";
import InputField from "../ui/form-elements/InputField";
import TextField from "../ui/form-elements/TextField";
import ImageUpload from "../Assets/images/img-upload.svg";
import axios from "./../utils/axios";
import SelectField from "../ui/form-elements/SelectField";

const Complaints = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    type: "",
    images: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAttachments = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...filesArray]
    }));
  };

  const removeFile = (index, file) => {
    setFormData((prevState) => {
      const updatedFiles = prevState.images.filter((_, i) => i !== index);
      const updatedDeleteFiles = file.id
        ? [...prevState.delete_files, file.id]
        : prevState.delete_files;
      return {
        ...prevState,
        images: updatedFiles,
        delete_files: updatedDeleteFiles
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/user/create_complaint", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (response.data.code == 200) {
        toast.success(t("complaints.complaintSentSuccessfully"));
        setFormData({
          title: "",
          message: "",
          type: "",
          images: []
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionHeader title={t("complaints.pageTitle")} />
      <section className="addRequest">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row m-0">
                  <div className="col-lg-6 col-12 p-2">
                    <InputField
                      label={t("complaints.title")}
                      id="title"
                      name="title"
                      onChange={handleChange}
                      value={formData.title}
                      required
                      placeholder={t("writeHere")}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <SelectField
                      id="type"
                      name="type"
                      onChange={handleChange}
                      value={formData.type}
                      required
                      label={t("complaints.type")}
                      disabledOption={t("complaints.choose")}
                      options={[
                        {
                          name: t("complaints.type1"),
                          value: "complaint"
                        },
                        {
                          name: t("complaints.type2"),
                          value: "suggestion"
                        }
                      ]}
                    />
                  </div>
                  <div className="col-12 p-2">
                    <TextField
                      label={t("complaints.message")}
                      required
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      placeholder={t("writeHere")}
                    />
                  </div>
                  <div className="col-12 p-2">
                    <label className="upload_attachments">
                      <div className="icon">
                        <img src={ImageUpload} alt="icon" />
                      </div>
                      <div className="content">
                        <h6>{t("projects.addattachments")}</h6>
                      </div>
                      <input
                        type="file"
                        name="images"
                        id="images"
                        multiple
                        accept="image/*"
                        onChange={handleAttachments}
                      />
                    </label>
                  </div>
                  {formData?.images?.length > 0 && (
                    <div className="col-12 p-2">
                      <div className="attachments">
                        {formData?.images?.map((file, index) => (
                          <div className="attachment" key={index}>
                            <div className="d-flex align-items-center gap-3">
                              <div className="icon">
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt="icon"
                                />
                              </div>
                              <div className="content">
                                <h6>
                                  {file?.file ? (
                                    <Link target="_blank" to={file?.file}>
                                      {file?.file}
                                    </Link>
                                  ) : (
                                    file?.name
                                  )}
                                </h6>
                                <p>
                                  {file?.file_size
                                    ? file?.file_size?.toFixed(2)
                                    : (file.size / 1024).toFixed(2)}{" "}
                                  MB
                                </p>
                              </div>
                            </div>
                            <div
                              className="delete"
                              onClick={() => removeFile(index, file)}
                            >
                              <IconTrash stroke={2} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-12 p-2 d-flex justify-content-end">
                  <SubmitButton
                    loading={loading}
                    name={t("complaints.submit")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complaints;
