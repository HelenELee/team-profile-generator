const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
        
    }

    getSchool() {
        return this.school;
    }

    createHTML() {
        return `<section class="person-card">
        <div class="card-header"><h3>${this.name}</h3>
          <i class="fas fa-graduation-cap fa-sm"></i> <h4>${this.role}</h4>
        </div>
        <div class="card-body">
          <table class="person-table">
            <tr class="border_bottom"><td class="table-row"><h5>ID: ${this.id}</h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>Email: <a href=mailto:"${this.email}">${this.email}</a></h5></td></tr>
            <tr class="border_bottom"><td class="table-row"><h5>School: ${this.school}</h5></td></tr>
          </table>
        </div>
      </section>\n`

    }
}

module.exports = Intern;