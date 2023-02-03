//test scripts for Manager class

const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  //test constructor
    describe("Initialization", () => {
        it("should return an object containing a 'name', 'id','email' and 'office number' properties when called with the 'new' keyword", () => {
            //arrange
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            //act
            const obj = new Manager(name, id, email, number);

            //assert
            expect(obj.name).toBe("John");
            expect(obj.id).toBe(1);
            expect(obj.email).toBe("John@mail.com");
            expect(obj.officeNumber).toBe(33);
        });      
    });


    describe("getName", () => {
        it("should return the name property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            const obj = new Manager(name, id, email, number);
            expect(obj.getName()).toBe("John");
            
        });
      });

      describe("getId", () => {
        it("should return the id property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            const obj = new Manager(name, id, email, number);
            expect(obj.getId()).toBe(1);
            
        });
      });

      describe("getEmail", () => {
        it("should return the email property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            const obj = new Manager(name, id, email, number);
            expect(obj.getEmail()).toBe("John@mail.com");
            
        });
      });

      describe("getRole", () => {
        it("should return the role property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            const obj = new Manager(name, id, email, number);
            expect(obj.getRole()).toBe("Manager");
            
        });
      });

      describe("getOfficeNumber", () => {
        it("should return the office number property of the object", () => {
            const name = "John";
            const id = 1;
            const email = "John@mail.com";
            const number = 33;

            const obj = new Manager(name, id, email, number);
            expect(obj.getOfficeNumber()).toBe(33);
            
        });
      });

}
)
