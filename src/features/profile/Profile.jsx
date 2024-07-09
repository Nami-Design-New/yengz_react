import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";
import UserProfileCard from "./UserProfileCard";
import axios from "./../../utils/axios";

const Profile = () => {
  const authedUser = useSelector((state) => state.authedUser.user);
  const [user, setUser] = useState(null);
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;
  const navigate = useNavigate();
  const { id } = useParams();

  const isMyAccount = !id || id === String(authedUser?.id);

  const getProfile = async () => {
    try {
      const res = await axios.get(`/user/get_profile?id=${id}`);
      if (res.data.code === 200) {
        setUser(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (isMyAccount) {
      setUser(authedUser);
    } else if (id) {
      getProfile();
    }
  }, [isMyAccount, authedUser, id]);

  return (
    <section className="profile-section container">
      <div className="row">
        <div className="col-lg-5 col-12 p-2">
          <UserProfileCard isMyAccount={isMyAccount} user={user} />
        </div>
        <div className="col-lg-7 col-12 p-2">
          <ProfileTabs isMyAccount={isMyAccount} user={user} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
