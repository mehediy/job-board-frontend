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
      </p>
    </div>
  );
};

export default BlogAccessToken;
