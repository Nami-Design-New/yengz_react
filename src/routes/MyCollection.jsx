import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import useGetCollection from "../features/collections/useGetCollection";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmptyData from "../ui/EmptyData";
import ServiceCard from "../ui/cards/ServiceCard";
import DataLoader from "./../ui/DataLoader";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { addCollectionToCart } from "../services/apiCollections";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useCartList from "../features/cart/useCartList";
import ConfirmationModal from "../ui/modals/ConfirmationModal";
import EditCollectionModal from "../ui/modals/EditCollectionModal";

const MyCollection = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: collection, isLoading } = useGetCollection(id);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { refetch } = useCartList();
  const [loading, setLoading] = useState(false);

  if (isLoading) {
    <DataLoader />;
  }

  if (!isLoading && !collection) {
    return <ErrorPage />;
  }

  const deleteCollection = async () => {
    setLoading(true);
    try {
      await removeCollection(collection?.id, queryClient);
      toast.success(t("cart.collectionDeletedSuccessfully"));
      setShowModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddtoCart = async () => {
    try {
      const res = await addCollectionToCart(collection?.id, queryClient);
      if (res?.code === 200) {
        toast.success(t("cart.collectionAddedToCart"));
        refetch();
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SectionHeader title={collection?.data?.title} />
      <section className="myCollections">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : (
            <div className="row">
              <div className="actions col-12 p2 w-100 d-flex justify-content-end mb-4">
                <button onClick={() => setShowEditModal(true)}>
                  <IconPencil stroke={2} />
                </button>
                <button onClick={() => setShowModal(true)}>
                  <IconTrash stroke={2} />
                </button>
                <button className="btn" onClick={handleAddtoCart}>
                  {t("cart.addTocart")}
                </button>
              </div>
              {collection?.data && collection?.data?.services?.length > 0 ? (
                collection?.data?.services?.map((service) => (
                  <div
                    className="col-lg-3 col-md-6 col-12 p2"
                    key={service?.id}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))
              ) : (
                <EmptyData>{t("emptyCollection")}</EmptyData>
              )}
            </div>
          )}
        </div>
      </section>
      <ConfirmationModal
        showModal={showModal}
        setShowModal={setShowModal}
        buttonText={t("cart.deleteCollection")}
        text={t("cart.areYouSureYouWantToDeleteThisCollection")}
        eventFun={deleteCollection}
        loading={loading}
      />
      <EditCollectionModal
        setShowModal={setShowEditModal}
        showModal={showEditModal}
        collection={collection}
      />
    </>
  );
};

export default MyCollection;
