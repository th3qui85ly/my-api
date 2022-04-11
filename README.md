# FakeBulk - REST API

### 🛠️ built using JSON-Server x Heroku

Base URL : 🔗 https://fakebulk-api.herokuapp.com/

### Endpoints available :

**/users/** - Methods allowed (GET, POST, PUT, DELETE, PATCH, OPTIONS) <br />
_Sample data_
<br />
[<br />
&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br />
&nbsp;&nbsp;&nbsp;&nbsp;"first_name": "Simon",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"last_name": "Jones",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"email": "simon@xyz.com",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"gender": "Male"<br />
&nbsp;&nbsp;}<br />
]
<br /><br />
**/products/** - Methods allowed (GET, POST, PUT, DELETE, PATCH, OPTIONS) <br />
_Sample data_
<br />
[<br />
&nbsp;{<br />
&nbsp;&nbsp;"title": "Brown eggs",<br />
&nbsp;&nbsp;"type": "dairy",<br />
&nbsp;&nbsp;"description": "Raw organic brown eggs in a basket",<br />
&nbsp;&nbsp;"filename": "0.jpg",<br />
&nbsp;&nbsp;"height": 600,<br />
&nbsp;&nbsp;"width": 400,<br />
&nbsp;&nbsp;"price": 28.1,<br />
&nbsp;&nbsp;"rating": 4<br />
&nbsp;}
<br />
]
<br /><br />
**/foods/** - Methods allowed (GET, POST, PUT, DELETE, PATCH, OPTIONS) <br />
_Sample data_
<br />
[<br />
&nbsp;&nbsp;{<br />
&nbsp;&nbsp;&nbsp;&nbsp;"restaurant":"Panera",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"foodItems":[<br />
&nbsp;&nbsp;&nbsp;&nbsp;{"foodName":"Modern Greek Salad with Quinoa", "foodType":"Salad", "calories":530, "carbs":29, "sideItem":true, "dressingItem":true },<br />
&nbsp;&nbsp;&nbsp;&nbsp;]<br />
&nbsp;&nbsp;}<br />
]

<hr> 

Developed by - [@th3qui85ly](https://github.com/th3qui85ly)
