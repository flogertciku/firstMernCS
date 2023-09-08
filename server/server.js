const express = require("express");
const app = express();
const port = 8000;
// REACT
//   axios.get( "localhost/api")
// .then(response=> console.log(response))   response = "{ message: "Hello World" }"
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( users );
});

app.get("/api/users/:id", (req, res) => {
    const idx=req.params.id
        res.json( users[idx] );
    });

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    console.log(users)
    // we always need to respond with something
    res.json( users );
});

app.patch("/api/users/:id", (req, res) => {
        // we can get this `id` variable from req.params
        const id = req.params.id;
        // assuming this id is the index of the users array we can replace the user like so
        users[id] = req.body;
        // we always need to respond with something
        res.json( users );
    });
    app.delete("/api/users/:id", (req, res) => {
            // we can get this `id` variable from req.params
            const id = req.params.id;
            // assuming this id is the index of the users array we can replace the user like so
           users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
        });


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.get("/api/test", (req, res) => {
    res.json({ message: "Hello test" });
});

// this needs to be below the other code blocks
app.listen( 8000, () => console.log(`Listening on port: ${port}`) );
