package main

import (
	"fmt"
	"net/http"
	"net/smtp"
	"os"
)

func SendMail(w http.ResponseWriter, r *http.Request) bool {

	// Sender data
	from := os.Getenv("GMAIL_USERNAME")
	password := os.Getenv("GMAIL_PASSWORD")

	// Receiver email
	to := []string{
		"sender@example.com",
	}

	// Server
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Message
	message := []byte("This is a test email message")

	// Auth
	auth := smtp.PlainAuth("", from, password, smtpHost)

	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, message)

	if err != nil {
		fmt.Println(err)
		return false
	}
	fmt.Println("Email Sent Successfully")
	return true
}
