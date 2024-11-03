import React from "react";
import { IAuthProps } from "./types/IAuthProps";
import { useCurrentQuery } from "../../store/API/authAPI";
import { LOADING } from "../../assets/common/vars";
import { useCurrentGoogleQuery } from "../../store/API/google/googleApi";
import { useAppSelector } from "../../store/hooks/hooks";

const Auth: React.FC<IAuthProps> = ({ children }) => {
  const isGoogleAuth = useAppSelector((state) => state.auth.user?.googleId);

const { data: googleData, isLoading: isGoogleLoading } = useCurrentGoogleQuery();
const { data: userData, isLoading: isUserLoading } = useCurrentQuery();

console.log("Google Data:", googleData);
console.log("User Data:", userData);


const isLoading = isGoogleAuth
  ? isGoogleLoading
  : isUserLoading;

if (isLoading || isGoogleLoading || isUserLoading) {
  return <span>{LOADING}</span>;
}

  return <>{children}</>
};

export default Auth;
