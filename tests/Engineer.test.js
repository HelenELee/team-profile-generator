const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id', 'email' and 'github' properties when called with the 'new' keyword", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
    
            expect(obj.name).toBe("John");
            expect(obj.id).toBe(1);
            expect(obj.email).toBe("John@mail.com");
            expect(obj.github).toBe("johnB");
        });      
    });


    describe("getName", () => {
        it("should return the name property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
            expect(obj.getName()).toBe("John");
            
        });
      });

      describe("getId", () => {
        it("should return the id property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
            expect(obj.getId()).toBe(1);
            
        });
      });

      describe("getEmail", () => {
        it("should return the email property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
            expect(obj.getEmail()).toBe("John@mail.com");
            
        });
      });

      describe("getRole", () => {
        it("should return the role property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
            expect(obj.getRole()).toBe("Engineer");
            
        });
      });

      describe("getGithub", () => {
        it("should return the github property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const github = "johnB";

            const obj = new Engineer(name, id, email, github);
            expect(obj.getGithub()).toBe("johnB");
            
        });
      });

}
)
