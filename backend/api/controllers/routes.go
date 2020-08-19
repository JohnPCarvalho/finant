package controllers

func (s *Server) initializeRoutes() {

	//Home Route
	s.Router.HandleFunc("/", s.Home).Methods("GET")
	//Users Routes

}
