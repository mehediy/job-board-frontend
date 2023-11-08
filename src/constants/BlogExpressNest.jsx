import React from "react";

const BlogExpressNest = () => {
  return (
    <div className="padding max-w-4xl mx-auto space-y-4">
      <h1 className="heading-1">What is express js? What is Nest JS?</h1>
      <h2 className="heading-2">What is NestJS?</h2>
      <p>
        NestJS is a Node.js framework for building server-side applications. It
        is based on TypeScript and JavaScript.
        <br />
        This framework is inspired by Angular, so most of what you find in
        Angular can also be found in Nest, including providers, middleware,
        components, and services. Nest can be easily learned by Angular
        developers for any type of project.
        <br />
        <br />
        One of the cool things about NestJS is that anything supported in
        Express (i.e., Express functions) is also supported in Nest.
      </p>
      <h2 className="heading-2">What is Express.js?</h2>
      <p>
        Express is a Node.js web application framework that provides a wide
        range of functionality for constructing web and mobile applications. It
        is a layer built on top of Node that aids in the management of servers
        and routes.
        <br />
        <br />
        Middleware is a program component that has access to a database, client
        requests, and other middleware. It is primarily responsible for the
        systematic organization of various Express.js functions.
      </p>
    </div>
  );
};

export default BlogExpressNest;
