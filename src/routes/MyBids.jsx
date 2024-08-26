import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import BidCard from "../ui/cards/BidCard";
import useGetMyProjectRequestsList from "../features/projects/useGetMyProjectRequestsList";
import EmptyData from "../ui/EmptyData";
import DataLoader from "../ui/DataLoader";
import SortFilterBox from "../ui/SortFilterBox";

export default function MyBids() {
  const { t } = useTranslation();
  const { isLoading, data: bids } = useGetMyProjectRequestsList();

  return (
    <>
      <SectionHeader />
      {isLoading ? (
        <DataLoader />
      ) : (
        <section className="best-freelancers search-section">
          <div className="container">
            <div className="row">
              <>
                <SortFilterBox type="bids" />
                {bids?.length > 0 ? (
                  bids.map((bid) => (
                    <div className="col-12 p-2" key={bid?.id}>
                      <BidCard bid={bid} />
                    </div>
                  ))
                ) : (
                  <EmptyData>{t("search.noData")}</EmptyData>
                )}
              </>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
