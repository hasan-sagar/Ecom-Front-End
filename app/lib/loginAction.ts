"use server";

import prisma from "./prisma";

interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export const userLogin = async (email: string, password: string) => {
  try {
    const checkUser = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    if (!checkUser) {
      return null;
    }
    return {
      ...checkUser,
      id: checkUser.id.toString(),
    } as User;
  } catch (error) {
    throw new Error("Wrong Credentials");
  }
};

export const adminLogin = async (email: string, password: string) => {
  try {
    //Check is user exists
    //Check if user is admin
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        password: password,
        
      },
      select :{
        id: true,
        email: true,
        role: true,
      }
    })
    const checkRole = user?.role === "admin";
    if (!user || !checkRole) {
      return null;
    } else{
      return {
        ...user,
        id: user.id.toString(),
      } as User;
    }
  } catch (error) {
    throw new Error("Wrong Credentials");
  }
};
