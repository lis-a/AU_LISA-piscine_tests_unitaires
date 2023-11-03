const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

// s1 Exercice 1
describe("POST /s1/exercice1", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice1")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la somme de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 3 }]);
    });
});

// s1 Exercice 2
describe("POST /s1/exercice2", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la soustraction de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice2").send({ n1: 2, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 0 }]);
    });
});

// s1 Exercice 3
describe("POST /s1/exercice3", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la multiplication de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice3").send({ n1: 2, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 4 }]);
    });
});

// s1 Exercice 4
describe("POST /s1/exercice4", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice4")
          .send({ n1: 1 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la division de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice4").send({ n1: 2, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 1 }]);
    });
});

// s1 Exercice 5
describe("POST /s1/exercice5", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice5")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice5")
          .send({  });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la factorielle de n1", async () => {
      const res = await request(app).post("/s1/exercice5").send({ n1: 2});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 2 }]);
    });
});

// s1 Exercice 6
describe("POST /s1/exercice6", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice6")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice6")
          .send({  });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Définit si n1 est pair ou impair", async () => {
      const res = await request(app).post("/s1/exercice6").send({ n1: 2});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "pair" }]);
    });
});

// s1 Exercice 7
describe("POST /s1/exercice7", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice7")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice7")
          .send({  });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement la valeur n1 celsius en Fahrenheit", async () => {
      const res = await request(app).post("/s1/exercice7").send({ n1: 180});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 356 }]);
    });
});

// s1 Exercice 8
describe("POST /s1/exercice8", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice8")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice8")
          .send({  });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
  
    test("Calcule correctement l'aire d'un cercle de valeur n1", async () => {
      const res = await request(app).post("/s1/exercice8").send({ n1: 10});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 314.1592653589793 }]);
    });
});

// s1 Exercice 9
describe("POST /s1/exercice9", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice9")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice9")
          .send({  });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un mot." }]);
    });
  
    test("Définit si n1 est un palindrome", async () => {
      const res = await request(app).post("/s1/exercice9").send({ n1: "kayak"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: true }]);
    });
});

// s1 Exercice 10
describe("POST /s1/exercice10", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
      });

    test("Renvoie une erreur s'il n'y pas de n1", async () => {
        const res = await request(app)
          .post("/s1/exercice5")
          .send({ n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
    
    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });

    test("Renvoie une erreur s'il n'y pas de n2", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
      
    
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice10")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide." }]);
    });
    
    test("Calcule correctement le PGCD de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice10").send({ n1: 6, n2: 18 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 6 }]);
    });
});

// s2 Exercice 1
describe('GET /s2/exercice1', () => {
    test("Récupère la date d'aujourd'hui il y a 10 ans", async () => {
        const currentDate = new Date();
        const tenYearsAgo = new Date(currentDate);
        tenYearsAgo.setFullYear(currentDate.getFullYear() - 10);
        const formattedDate = tenYearsAgo.toISOString().split('T')[0];
        const res = await request(app).get("/s2/exercice1")
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: formattedDate }]);
    });
});

// s2 Exercice 2
describe("POST /s2/exercice2", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice2")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice2")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice2")
          .send({ n1 : "2023/13/31" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });
  
    test("Formatte la date n1 en DD/MM/YYYY", async () => {
      const res = await request(app).post("/s2/exercice2").send({ n1: "2023/12/31"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "31/12/2023" }]);
    });
});

// s2 Exercice 3
describe("POST /s2/exercice3", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice3")
        .send({ n1: null, n2 : "2023-13-31"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ n1: "2023-13-31", n2 : null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ n2 : "31/12/2023" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ n1: "2023-13-31", n2: "2023-12-21"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ n1 : "31/12/2023" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n2 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice3")
          .send({ n1: "2023-12-31", n2: "2023-13-21"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });

    test("Renvoie une erreur si la date n1 est n'est pas inférieure à la date n2", async () => {
        const res = await request(app).post("/s2/exercice3")
        .send({ n1: "2023-12-31", n2: "2023-12-21"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "La date n1 doit être inférieure à la date n2." }]);
      });
  
    test("Calcule la différence de jours entre date n1 et date n2", async () => {
      const res = await request(app).post("/s2/exercice3")
      .send({ n1: "2023-12-21", n2: "2023-12-31"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 10 }]);
    });
});

// s2 Exercice 4
describe("POST /s2/exercice4", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice4")
        .send({ n1: null, n2 : 10});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ n1: "2023-12-11", n2 : null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ n2 : 10 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s2/exercice4")
          .send({ n1 : "2023-12-11" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre." }]);
    });

    test("Renvoie une erreur si n1 n'est pas valide", async () => {
        const res = await request(app).post("/s2/exercice4")
        .send({ n1: "2023-13-11", n2: 10});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });

    test("Calcule l'ajout de n2 jours à la date n1", async () => {
      const res = await request(app).post("/s2/exercice4")
      .send({ n1: "2023-12-11", n2: 10});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "2023-12-21" }]);
    });
});

// s2 Exercice 5
describe("POST /s2/exercice5", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice5")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une année." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice5")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une année." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une année", async () => {
        const res = await request(app)
          .post("/s2/exercice5")
          .send({ n1: 12345 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une année valide." }]);
    });
  
    test("Définit si la date n1 est bissextile", async () => {
      const res = await request(app).post("/s2/exercice5").send({ n1: 2000});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: true }]);
    });
});

// s2 Exercice 6
describe("POST /s2/exercice6", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice6")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice6")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice6")
          .send({ n1: "2023-13-12" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });
  
    test("Récupère le premier jour du mois de la date n1", async () => {
      const res = await request(app).post("/s2/exercice6").send({ n1: "2023-12-12"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Vendredi" }]);
    });
});

// s2 Exercice 7
describe("POST /s2/exercice7", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice7")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice7")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice7")
          .send({ n1: "2023-13-12" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });
  
    test("Récupère le dernier jour du mois de la date n1", async () => {
      const res = await request(app).post("/s2/exercice7").send({ n1: "2023-12-12"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Dimanche" }]);
    });
});

// s2 Exercice 8
describe("POST /s2/exercice8", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice8")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice8")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date." }]);
    });

    test("Renvoie une erreur si n1 n'est pas une date valide", async () => {
        const res = await request(app)
          .post("/s2/exercice8")
          .send({ n1: "2023-13-01" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide." }]);
    });

    test("Renvoie une erreur si n1 est avant le 01/01/1970", async () => {
        const res = await request(app)
          .post("/s2/exercice8")
          .send({ n1: "1965-01-01" });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date avant le 1er janvier 1970." }]);
    });
  
    test("Convertit une date n1 en heures et en minutes", async () => {
      const res = await request(app).post("/s2/exercice8").send({ n1: "2023-01-01"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "La date 2023-01-01 équivaut à 464592 heures, soit 27875520 minutes écoulées depuis le 01/01/1970." }]);
    });
});

// s2 Exercice 9
describe("POST /s2/exercice9", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice9")
        .send({
            n1: null, 
            n2 : "2023-01-10", 
            n3 : "2023-02-01", 
            n4 : "2023-02-10"
        });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 1." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({ 
            n2 : "2023-01-10", 
            n3 : "2023-02-01", 
            n4 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 1." }]);
    });

    test("Renvoie si n1 n'est pas une date valide", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-13-01", 
          n2 : "2023-01-10",
          n3 : "2023-02-11", 
          n4 : "2023-02-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 1." }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({
              n1: "2023-01-10", 
              n2 : null, 
              n3 : "2023-02-01", 
              n4 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 1." }]);
      });

    test("Renvoie une erreur s'il n'y a pas de n2", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({ 
            n1 : "2023-01-10", 
            n3 : "2023-02-01", 
            n4 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 1." }]);
    });

    test("Renvoie si n2 n'est pas une date valide", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-01-01", 
          n2 : "2023-13-10",
          n3 : "2023-02-11", 
          n4 : "2023-02-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 1." }]);
    });

    test("Renvoie une erreur si n3 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({
              n1: "2023-01-10", 
              n2 : "2023-02-01", 
              n3 : null, 
              n4 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 2." }]);
      });

    test("Renvoie une erreur s'il n'y a pas de n3", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({ 
            n1 : "2023-01-10", 
            n2 : "2023-02-01", 
            n4 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 2." }]);
    });

    test("Renvoie si n3 n'est pas une date valide", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-01-01", 
          n2 : "2023-01-10",
          n3 : "2023-13-11", 
          n4 : "2023-02-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 2." }]);
    });

    test("Renvoie une erreur si n4 est null", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({
              n1: "2023-01-01", 
              n2 : "2023-01-10", 
              n3 : "2023-02-01", 
              n4 : null
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 2." }]);
      });

    test("Renvoie une erreur s'il n'y a pas de n4", async () => {
        const res = await request(app)
          .post("/s2/exercice9")
          .send({ 
            n1 : "2023-01-10", 
            n2 : "2023-02-01", 
            n3 : "2023-02-10"
          });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 2." }]);
    });

    test("Renvoie si n4 n'est pas une date valide", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-01-01", 
          n2 : "2023-01-10",
          n3 : "2023-02-11", 
          n4 : "2023-13-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de fin valide pour la plage 2." }]);
    });

    test("Renvoie une erreur si n1 est supérieur à n2", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-01-11", 
          n2 : "2023-01-10",
          n3 : "2023-02-01", 
          n4 : "2023-02-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 1." }]);
    });

    test("Renvoie une erreur si n3 est supérieur à n4", async () => {
        const res = await request(app).post("/s2/exercice9").send({ 
          n1 : "2023-01-01", 
          n2 : "2023-01-10",
          n3 : "2023-02-11", 
          n4 : "2023-02-10"
      });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de début valide pour la plage 2." }]);
    });

  
    test("Définit si deux plages de dates (n1-n2) et (n3-n4) se chevauchent", async () => {
      const res = await request(app).post("/s2/exercice9").send({ 
        n1 : "2023-01-01", 
        n2 : "2023-01-10",
        n3 : "2023-02-01", 
        n4 : "2023-02-10"
    });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: false }]);
    });
});

// s2 Exercice 10
describe("POST /s2/exercice10", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s2/exercice10")
        .send({ n1: null});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de naissance." }]);
    });

    test("Renvoie une erreur s'il n'y a pas de n1", async () => {
        const res = await request(app)
          .post("/s2/exercice10")
          .send({ });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer une date de naissance." }]);
    });
  
    test("Calcule l'âge en fonction de la date de naissance n1", async () => {
      const res = await request(app).post("/s2/exercice10").send({ n1: "2000-12-12"});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 22 }]);
    });
});