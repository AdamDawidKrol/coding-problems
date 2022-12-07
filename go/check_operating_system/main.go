package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	os := runtime.GOOS
	switch os {
	case "darwin":
		fmt.Println("Darwin.")
	case "linux":
		fmt.Println("Linux.")
	default:
		fmt.Printf("%s \n", os)
	}
}
