package main

import (
	"fmt"
	"time"
)

func main() {
	currentHour := time.Now().Hour()
	switch {
	case currentHour < 12:
		fmt.Println("It's morning now.")
	case currentHour < 17:
		fmt.Println("It's afternoon now.")
	default:
		fmt.Println("It's evening now.")
	}
}
