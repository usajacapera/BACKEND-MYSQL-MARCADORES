const express = require("express");
const routes = express.Router();

//--------select---------------
/*routes.get("/", (req, res) => {
  //res.send('Aqui si Ya viene el select')
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("select * from libros", (err, rows) => {
            if (err) return res.send(err);
            res.json(rows);
        });
    });
});*/

routes.get('/:table',(req,res) => {
  req.getConnection((err,conn) => {
    if(err) return res.send(err)

    var ssql='select * from '+ req.params.table

    conn.query(ssql,(err,rows)=>{
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

routes.get('/eventos/fecha', (req, res) => {
  req.getConnection((err,conn) => {
    if(err) return res.send(err)

    var ssql = 'select eve_id'
    ssql+=',date_format(eve_fecha, "%Y-%m-%d")as eve_fecha'
    ssql+=',equ_equipo1'
    ssql+=',equ_equipo2'
    ssql+=',eve_marca1'
    ssql+=',eve_marca2'
    ssql+=',dep_id'
    ssql+=',eve_descrip from eventos'

    conn.query(ssql, (err, rows) => {
      if(err) return res.send(err)
      res.json(rows)
    })
  })
})

// ruta para inicio de sesión
routes.get('/:table/:email/:clave',(req,res)=>{
  req.getConnection((err,conn)=>{
      if(err) return res.send(err)
      var ssql="select * from "+req.params.table+" where usu_email='"+req.params.email+"' and usu_clave='"+req.params.clave+"'"
      conn.query(ssql,(err,rows)=>{
        if(err) return res.send(err)
        res.json(rows)
      })
  })
})

// ruta para listar registro con limite
// routes.get('/:table/:lim',(req,res)=>{
//   req.getConnection((err,conn)=>{
//     if(err) return res.send(err)
//       var ssql="SELECT t1.eve_id AS sec,date_format(t1.eve_fecha, '%d-%m-%Y') AS fecha "
//       ssql+=",t2.equ_nombre AS equi1,t3.equ_nombre AS equi2,t1.eve_marca1 AS marca1,t1.eve_marca2 AS marca2 "
//       ssql+=",t4.dep_nombre AS deporte "
//       ssql+=",t1.eve_descrip AS descrip "
//       ssql+=" from eventos t1 "
//       ssql+=" LEFT JOIN equipos t2 ON t1.equ_equipo1=t2.equ_id "
//       ssql+=" LEFT JOIN equipos t3 ON t1.equ_equipo2=t3.equ_id "
//       ssql+=" LEFT JOIN deportes t4 ON t1.dep_id=t4.dep_id "
//       ssql+=" ORDER BY 1 desc LIMIT "+req.params.lim
//       conn.query(ssql,(err,rows)=>{
//         if(err) return res.send(err)
//         res.json(rows)
//       })
//   })
// })

routes.get('/:table/:lim',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)
      var ssql="SELECT t1.eve_id AS eve_id,date_format(t1.eve_fecha, '%d-%m-%Y') AS eve_fecha "
      ssql+=",t2.equ_nombre AS equ_equipo1,t3.equ_nombre AS equ_equipo2,t1.eve_marca1 AS eve_marca1,t1.eve_marca2 AS eve_marca2 "
      ssql+=",t4.dep_nombre AS dep_id "
      ssql+=",t1.eve_descrip AS eve_descrip "
      ssql+=" from eventos t1 "
      ssql+=" LEFT JOIN equipos t2 ON t1.equ_equipo1=t2.equ_id "
      ssql+=" LEFT JOIN equipos t3 ON t1.equ_equipo2=t3.equ_id "
      ssql+=" LEFT JOIN deportes t4 ON t1.dep_id=t4.dep_id "
      ssql+=" ORDER BY 1 desc LIMIT "+req.params.lim
      conn.query(ssql,(err,rows)=>{
        if(err) return res.send(err)
        res.json(rows)
      })
  })
})


// --------insert-----------------
/*routes.post("/", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("INSERT INTO libros SET ?", [req.body], (err, rows) => {
            if (err) return res.send(err);
            res.send("Add OK!!");
        });
    });
});*/

routes.post('/eventos/fecha',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='INSERT INTO ' + 'eventos' + ' SET ? '

    conn.query(ssql, [req.body], (err,rows)=>{
      if(err) return res.send(err)
      res.send('Add OK!!')
    })
  })
})


routes.post('/:table',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='INSERT INTO ' + req.params.table + ' SET ? '

    conn.query(ssql, [req.body], (err,rows)=>{
      if(err) return res.send(err)
      res.send('Add OK!!')
    })
  })
})

//--------delete-----------------
/*routes.delete("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("DELETE FROM libros WHERE lib_id = ?", [req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Book delete OK!!");
        });
    });
});*/

routes.delete('/eventos/fecha/:field/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='DELETE FROM ' + 'eventos' + ' WHERE ' + req.params.field +' = ?'

    conn.query(ssql, [req.params.id], (err,rows)=>{
      if(err) return res.send(err)
      res.send("Book delete OK!!")
    })
  })
})

routes.delete('/:table/:field/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='DELETE FROM ' + req.params.table + ' WHERE ' + req.params.field +' = ?'

    conn.query(ssql, [req.params.id], (err,rows)=>{
      if(err) return res.send(err)
      res.send("Book delete OK!!")
    })
  })
})

//--------update-----------------
/*routes.put("/:id", (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        conn.query("UPDATE libros set ? WHERE lib_id = ?", [req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err);
            res.send("Book UPDATE OK!!");
        });
    });
});*/

routes.put('/:table/:field/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='UPDATE ' + req.params.table + ' set ? WHERE ' + req.params.field +' = ?'

    conn.query(ssql, [req.body, req.params.id], (err,rows)=>{
      if(err) return res.send(err)
      res.send("Book UPDATE OK!!")
    })
  })
})

routes.put('/eventos/fecha/:field/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    var ssql='UPDATE ' + 'eventos' + ' set ? WHERE ' + req.params.field +' = ?'

    conn.query(ssql, [req.body, req.params.id], (err,rows)=>{
      if(err) return res.send(err)
      res.send("Book UPDATE OK!!")
    })
  })
})

module.exports = routes;
