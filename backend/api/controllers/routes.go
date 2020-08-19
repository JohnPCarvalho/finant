package controllers

import "github.com/JohnPCarvalho/finant/backend/api/middlewares"

func (s *Server) initializeRoutes() {

	//Home Route
	s.Router.HandleFunc("/", middlewares.SetMiddlewareJSON(s.Home)).Methods("GET")

	//Users Routes

}
