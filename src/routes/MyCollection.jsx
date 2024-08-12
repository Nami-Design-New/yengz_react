import React from "react";
import SectionHeader from "../ui/SectionHeader";
import useGetCollection from "../features/collections/useGetCollection";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmptyData from "../ui/EmptyData";
import ServiceCard from "../ui/cards/ServiceCard";
import DataLoader from "./../ui/DataLoader";

const MyCollection = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data: collection, isLoading } = useGetCollection(id);

  if (isLoading) {
    <DataLoader />;
  }

  if (!isLoading && !collection) {
    return <ErrorPage />;
  }

  return (
    <>
      <SectionHeader title={collection?.data?.title} />
      <section className="myCollections">
        <div className="container">
          {isLoading ? (
            <DataLoader />
          ) : (
            <div className="row">
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
    </>
  );
};

export default MyCollection;
