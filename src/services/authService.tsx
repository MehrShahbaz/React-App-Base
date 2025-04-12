import { AxiosPromise } from "axios";

import baseService from "./baseService";
import { authUrls } from "./serviceUrls";
import { LoginResponse } from "@/types/sliceTypes/authSliceTypes";

export const loginService = (email: string): AxiosPromise<LoginResponse> =>
  baseService.post(authUrls.login, { email });

export const registerService = (email: string): AxiosPromise =>
  baseService.post(authUrls.register, { email });
