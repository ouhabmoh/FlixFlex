import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

passport.use("local-login", new LocalStrategy(User.authenticate()));
