export interface AccessTokenPayload {
    // Attributes defined by IETF
    aud?: string;    // Audience
    exp?: number;   // Expiration Time (number of seconds since the Epoch)
    iat?: number;   // Issued At (number of seconds since the Epoch)
    iss?: string;   // Issuer
    jti?: string;   // JWT ID
    nbf?: number;   // Not Before (number of seconds since the Epoch)
    sub: string;   // Subject (GUID)
    email: string; // Email
}