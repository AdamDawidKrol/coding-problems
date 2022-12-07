package main

import "fmt"

func main() {
	var a int = 2
	pointA := &a
	fmt.Println("pointA points to value", *pointA)
	fmt.Println("pointA value =", pointA)

	*pointA = 12
	fmt.Println("new a value =", a)
}
