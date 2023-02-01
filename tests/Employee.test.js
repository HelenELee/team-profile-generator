const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id' and 'email' properties when called with the 'new' keyword", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";

            const obj = new Employee(name, id, email);
    
            expect(obj.name).toBe("John");
            expect(obj.id).toBe(1);
            expect(obj.email).toBe("John@mail.com");
        });      
    });


    describe("getName", () => {
        it("should return the name property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";

            const obj = new Employee(name, id, email);
            expect(obj.getName()).toBe("John");
            
        });
      });

      describe("getId", () => {
        it("should return the id property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";

            const obj = new Employee(name, id, email);
            expect(obj.getId()).toBe(1);
            
        });
      });

      describe("getEmail", () => {
        it("should return the email property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";

            const obj = new Employee(name, id, email);
            expect(obj.getEmail()).toBe("John@mail.com");
            
        });
      });

      describe("getRole", () => {
        it("should return the role property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";

            const obj = new Employee(name, id, email);
            expect(obj.getRole()).toBe("Employee");
            
        });
      });



}
)
