package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"gopkg.in/olahol/melody.v1"
)

func main() {
	r := gin.Default()
	m := melody.New()

	//r.Use(static.Serve("/", static.LocalFile("./public", true)))
	r.GET("/ws", func(c *gin.Context) {
		m.HandleRequest(c.Writer, c.Request)
	})
	m.HandleMessage(func(s *melody.Session, msg []byte) {
		log.Println("msg received")
		m.Broadcast(msg)
	})
	r.Run(":5000")
}
