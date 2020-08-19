package controllers

import (
	"fmt"
	"net/http"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
	//fmt.FPrintf(w, "Home aqui galerinha do youtube %i", http.StatusOK)
	fmt.Fprintf(w, "Homepage")
}
