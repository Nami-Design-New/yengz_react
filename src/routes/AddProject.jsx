import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IconTrash } from "@tabler/icons-react";
import { createProject, editProject } from "../services/apiProjects";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SectionHeader from "../ui/SectionHeader";
import InputField from "../ui/form-elements/InputField";
import TextField from "../ui/form-elements/TextField";
import SubmitButton from "../ui/form-elements/SubmitButton";
import SelectField from "./../ui/form-elements/SelectField";
import useCategoriesList from "../features/categories/useCategoriesList";
import useGetProject from "../features/projects/useGetProject";
import useSubCategoriesList from "../features/categories/useSubCategoriesList";
import ImageUpload from "../Assets/images/img-upload.svg";
import doc from "../Assets/images/doc.svg";

function AddProject() {
  const { id } = useParams();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: categories } = useCategoriesList();
  const { data: projectDetails } = useGetProject();
  const { data: subCategories } = useSubCategoriesList(categoryId);

  const [formData, setFormData] = useState({
    title: "",
    sub_category_id: "",
    price: "",
    days: "",
    description: "",
    project_files: [],
    delete_files: [],
  });

  useEffect(() => {
    if (projectDetails) {
      setCategoryId(projectDetails?.category?.id);
      const initialData = {
        id: projectDetails?.id,
        title: projectDetails?.title,
        sub_category_id: projectDetails?.sub_category_id,
        price: projectDetails?.price,
        days: projectDetails?.days,
        description: projectDetails?.description,
        project_files: projectDetails?.files,
        delete_files: [],
      };
      setFormData(initialData);
    }
  }, [projectDetails]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAttachments = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      project_files: [...prev.project_files, ...filesArray],
    }));
  };

  const removeFile = (index, file) => {
    setFormData((prevState) => {
      const updatedFiles = prevState.project_files.filter(
        (_, i) => i !== index
      );
      const updatedDeleteFiles = file.id
        ? [...prevState.delete_files, file.id]
        : prevState.delete_files;
      return {
        ...prevState,
        project_files: updatedFiles,
        delete_files: updatedDeleteFiles,
      };
    });
  };

  const dataToSendForUpdate = {
    ...formData,
    project_files: formData.project_files.filter((file) =>
      file?.type?.startsWith("image/")
    ),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        await editProject(dataToSendForUpdate, queryClient);
        toast.success(t("projects.projectEditedSuccessfully"));
      } else {
        await createProject(formData, queryClient);
        toast.success(t("projects.projectCreatedSuccessfully"));
      }
      navigate("/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionHeader />
      <section className="addRequest">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 p-2">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row m-0">
                  <div className="col-12 p-2">
                    <InputField
                      label={t("projects.projectTitle")}
                      id="title"
                      name="title"
                      onChange={handleChange}
                      value={formData.title}
                      required
                      placeholder={t("writeHere")}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <InputField
                      label={t("projects.price")}
                      id="price"
                      name="price"
                      type="number"
                      min={1}
                      value={formData.price}
                      onChange={handleChange}
                      required
                      span={"$"}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <InputField
                      label={t("projects.deliveryTime")}
                      id="days"
                      name="days"
                      type="number"
                      min={1}
                      required
                      value={formData.days}
                      onChange={handleChange}
                      span={t("projects.days")}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <SelectField
                      label={t("addService.serviceCategory")}
                      id="category"
                      name="category"
                      disabledOption={t("select")}
                      value={categoryId}
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                      }}
                      options={categories?.data?.map((category) => ({
                        name: category.name,
                        value: category.id,
                      }))}
                    />
                  </div>
                  <div className="col-lg-6 col-12 p-2">
                    <SelectField
                      label={t("addService.serviceSubCategory")}
                      id="sub_category_id"
                      name="sub_category_id"
                      value={formData.sub_category_id}
                      onChange={handleChange}
                      options={subCategories?.data?.map((subCategory) => ({
                        name: subCategory.name,
                        value: subCategory.id,
                      }))}
                      disabledOption={
                        categoryId
                          ? t("select")
                          : t("addService.selectCategoryFirst")
                      }
                    />
                  </div>
                  <div className="col-12 p-2">
                    <TextField
                      label={t("projects.projectDescription")}
                      required
                      id="description"
                      name="description"
                      onChange={handleChange}
                      value={formData.description}
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
                        name="project_files"
                        id="project_files"
                        multiple
                        onChange={handleAttachments}
                      />
                    </label>
                  </div>
                  {formData?.project_files?.length > 0 && (
                    <div className="col-12 p-2">
                      <div className="attachments">
                        {formData?.project_files?.map((file, index) => (
                          <div className="attachment" key={index}>
                            <div className="d-flex align-items-center gap-3">
                              <div className="icon">
                                <img
                                  src={
                                    file?.type?.startsWith("image/")
                                      ? URL.createObjectURL(file)
                                      : doc
                                  }
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
                    name={id ? t("projects.update") : t("projects.publish")}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddProject;
