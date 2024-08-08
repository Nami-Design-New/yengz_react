import React from "react";
import SectionHeader from "../ui/SectionHeader";
import useCollectionsList from "../features/collections/useCollectionsList";
import CollectionCard from "../ui/cards/CollectionCard";
import EmptyData from "../ui/EmptyData";
import DataLoader from "../ui/DataLoader";
import { useTranslation } from "react-i18next";
import CustomPagination from "./../ui/CustomPagination";

const MyCollections = () => {
  const { t } = useTranslation();
  const { data: collections, isLoading } = useCollectionsList();
  return (
    <>
      <SectionHeader />
      <section className="myCollections">
        {isLoading ? (
          <DataLoader />
        ) : (
          <div className="container">
            <div className="row">
              {collections && collections?.length > 0 ? (
                collections?.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))
              ) : (
                <EmptyData>{t("collectionsEmpty")}</EmptyData>
              )}
              {collections?.count > 10 && (
                <CustomPagination count={collections?.count} pageSize={10} />
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default MyCollections;
