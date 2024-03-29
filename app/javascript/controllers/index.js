// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import ArticlesController from "./articles_controller"
application.register("articles", ArticlesController)

import CategoriesController from "./categories_controller"
application.register("categories", CategoriesController)

import SessionsController from "./sessions_controller"
application.register("sessions", SessionsController)

import UsersController from "./users_controller"
application.register("users", UsersController)

import WelcomeController from "./welcome_controller"
application.register("welcome", WelcomeController)
