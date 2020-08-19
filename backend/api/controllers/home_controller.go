package controllers

import (
	"fmt"
	"net/http"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("Home aqui galerinha do youtube %i", http.StatusOK)
}
