import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";
import UserProfileCard from "./UserProfileCard";

const Profile = () => {
  const user = useSelector((state) => state.authedUser.user);
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const token = cookies?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <section className="profile-section container">
      <div className="row">
        <div className="col-lg-5 col-12 p-2">
          <UserProfileCard user={user} />
        </div>
        <div className="col-lg-7 col-12 p-2">
          <ProfileTabs user={user} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
