var a = {"attachment": {
				"type": "image",
				"payload": {
					"url": "http://www.bharatint.com/img/categories/our-cat-shop-image.png"
				}}
    }
var b = {"message": "hello"}

final = [a, b]

key = Object.keys(final)

// Get key for each JSON
for (k in final){
  console.log(Object.keys(final[k]))
}
