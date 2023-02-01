const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id','email' and 'school' properties when called with the 'new' keyword", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
    
            expect(obj.name).toBe("John");
            expect(obj.id).toBe(1);
            expect(obj.email).toBe("John@mail.com");
            expect(obj.school).toBe("UWA");
        });      
    });


    describe("getName", () => {
        it("should return the name property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
            expect(obj.getName()).toBe("John");
            
        });
      });

      describe("getId", () => {
        it("should return the id property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
            expect(obj.getId()).toBe(1);
            
        });
      });

      describe("getEmail", () => {
        it("should return the email property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
            expect(obj.getEmail()).toBe("John@mail.com");
            
        });
      });

      describe("getRole", () => {
        it("should return the role property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
            expect(obj.getRole()).toBe("Intern");
            
        });
      });

      describe("getSchool", () => {
        it("should return the school property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const school = "UWA";

            const obj = new Intern(name, id, email, school);
            expect(obj.getSchool()).toBe("UWA");
            
        });
      });

}
)
