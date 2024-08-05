import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileTabs from "../features/profile/ProfileTabs";
import UserProfileCard from "../features/profile/UserProfileCard";
import useGetProfile from "../features/profile/useGetProfile";
import DataLoader from "../ui/DataLoader";

const Profile = () => {
  const authedUser = useSelector((state) => state.authedUser.user);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { data: profile, isLoading } = useGetProfile(id);
  const isMyAccount = !id || id === String(authedUser?.id);

  useEffect(() => {
    if (isMyAccount) {
      setUser(authedUser);
    } else if (id && profile) {
      setUser(profile);
    }
  }, [isMyAccount, authedUser, profile, id]);

  return isLoading ? (
    <DataLoader />
  ) : (
    <section className="profile-section container">
      <div className="row">
        <div className="col-lg-4 col-12 p-2">
          <UserProfileCard isMyAccount={isMyAccount} user={user} />
        </div>
        <div className="col-lg-8 col-12 p-2">
          <ProfileTabs isMyAccount={isMyAccount} user={user} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
