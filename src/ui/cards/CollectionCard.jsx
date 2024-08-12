import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { formatTimeDifference, getTimeDifference } from "../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { toast } from "react-toastify";
import {
  removeCollection,
  addCollectionToCart
} from "../../services/apiCollections";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmationModal from "../modals/ConfirmationModal";
import EditCollectionModal from "../modals/EditCollectionModal";

const CollectionCard = ({ collection }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const timeDifference = getTimeDifference(collection?.created_at);
  console.log(timeDifference);
  const startTime = formatTimeDifference(
    timeDifference.years,
    timeDifference.months,
    timeDifference.days,
    timeDifference.hours,
    timeDifference.minutes,
    t
  );

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
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-lg-6 col-12 p-2">
      <div className="collectionCard">
        <div className="info">
          <h6>
            <Link to={`/my-collections/${collection?.id}`}>
              {collection?.title}
            </Link>
          </h6>
          <ul>
            <li>
              <i className="fa-regular fa-cubes"></i> <span>{}</span>
            </li>
            <li>
              <i className="fa-light fa-clock"></i> <span>{startTime}</span>
            </li>
          </ul>
        </div>
        <div className="actions">
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
      </div>
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
    </div>
  );
};

export default CollectionCard;
