import { Component } from '@angular/core';

@Component({
  selector: 'app-sql',
  template: `
    <div class="scrollable-content">
      <p>
        SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. 
        It was developed in the early 1970s by IBM and has since become the de facto standard for interacting with relational databases. 
        SQL is used to perform a variety of tasks such as querying data, updating records, creating and modifying database structures, 
        and controlling access to the database. Some common SQL commands include SELECT, INSERT, UPDATE, DELETE, and CREATE.
        SQL operates on a set-based approach, allowing operations to be performed on large amounts of data efficiently. One of the key features of 
        SQL is its ability to handle complex queries, including joins, nested queries, and aggregations. It is widely used in applications 
        ranging from small-scale websites to large enterprise systems that rely on relational databases such as MySQL, PostgreSQL, 
        SQL Server, and Oracle.
      </p>
    </div>
  `,
  styleUrls: ['./sql.component.css']
})
export class SQLComponent {}
