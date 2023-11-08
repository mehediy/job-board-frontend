const BlogAccessToken = () => {
  return (
    <div className="padding max-w-4xl mx-auto space-y-4">
      <h1 className="heading-1">What is an access token and refresh token?</h1>
      <h2 className="heading-2">Access Token</h2>
      <p>
        An access token (from an authorization server) allows temporary access
        to restricted resources such as APIs or websites. Generally, access
        tokens are valid for only a few minutes or hours, depending on the
        setting to safeguard the resource server. They also include security
        features like signatures.
        <br />
        <br />
        It is typically stored in memory or in a browser's local storage.
        However, local storage is susceptible to cross-site scripting (XSS)
        attacks, so it's important to secure it properly. Modern best practices
        often involve using HTTP-only secure cookies for access tokens.
      </p>
      <h2 className="heading-2">Refresh Token</h2>
      <p>
        In OAuth 2.0 authorization frameworks, refresh tokens allow developers
        to manage users' sessions across native, web-based, and single-page
        apps. <br /> <br /> Additionally, they allow users to log in and stay
        connected without providing their passwords for long periods. Further,
        they add a layer of security for sensitive data, improving the user
        experience. <br /> <br />
        Refresh tokens can last from a few days to a few months. Refresh tokens
        by themselves don't grant the user any access. To avoid needless
        re-authentication, they prolong the duration of the session.
        <br />
        <br />
        The refresh token should always be stored in an HTTP-only secure cookie.
        This provides better security because cookies are not accessible via
        JavaScript, making it harder for attackers to steal the refresh token.
      </p>
      <h2 className="heading-2">Here's how the process typically works:</h2>

      <ul className="space-y-2">
        <li>
          The user logs in to the application, and if the credentials are valid,
          the server responds with an access token and a refresh token.
        </li>
        <li>
          The client application stores the access token in a secure way,
          usually in memory or a secure cookie. The refresh token is stored
          securely, often in an HTTP-only secure cookie.
        </li>
        <li>
          When the access token expires, the client uses the refresh token to
          request a new access token from the authentication server.
        </li>
        <li>
          The authentication server validates the refresh token and, if it's
          valid, issues a new access token. This helps to maintain the user's
          session without requiring frequent logins.
        </li>
      </ul>
    </div>
  );
};

export default BlogAccessToken;
