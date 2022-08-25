export enum KysoSettingsEnum {
    // Cloudfront data
    KYSO_FILES_CLOUDFRONT_URL = 'KYSO_FILES_CLOUDFRONT_URL',
    // Amazon S3 configuration
    AWS_REGION = 'AWS_REGION',
    AWS_S3_BUCKET = 'AWS_S3_BUCKET',
    AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID',
    AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY',
    // Bitbucket configuration
    AUTH_BITBUCKET_CLIENT_ID = 'AUTH_BITBUCKET_CLIENT_ID',
    AUTH_BITBUCKET_CLIENT_SECRET = 'AUTH_BITBUCKET_CLIENT_SECRET',
    BITBUCKET_API = 'BITBUCKET_API',
    // Github configuration
    AUTH_GITHUB_CLIENT_ID = 'AUTH_GITHUB_CLIENT_ID',
    AUTH_GITHUB_CLIENT_SECRET = 'AUTH_GITHUB_CLIENT_SECRET',
    // Google configuration
    AUTH_GOOGLE_CLIENT_ID = 'AUTH_GOOGLE_CLIENT_ID',
    AUTH_GOOGLE_CLIENT_SECRET = 'AUTH_GOOGLE_CLIENT_SECRET',
    // Gitlab configuration
    AUTH_GITLAB_CLIENT_ID = 'AUTH_GITLAB_CLIENT_ID',
    AUTH_GITLAB_CLIENT_SECRET = 'AUTH_GITLAB_CLIENT_SECRET',
    AUTH_GITLAB_REDIRECT_URI = 'AUTH_GITLAB_REDIRECT_URI',
    // PingID SAML configruation
    AUTH_PINGID_SAML_SSO_URL = 'AUTH_PINGID_SAML_SSO_URL',
    // Auth enabling
    AUTH_ENABLE_GLOBALLY_GOOGLE = 'AUTH_ENABLE_GLOBALLY_GOOGLE',
    AUTH_ENABLE_GLOBALLY_GITHUB = 'AUTH_ENABLE_GLOBALLY_GITHUB',
    AUTH_ENABLE_GLOBALLY_BITBUCKET = 'AUTH_ENABLE_GLOBALLY_BITBUCKET',
    AUTH_ENABLE_GLOBALLY_GITLAB = 'AUTH_ENABLE_GLOBALLY_GITLAB',
    AUTH_ENABLE_GLOBALLY_KYSO = 'AUTH_ENABLE_GLOBALLY_KYSO',
    AUTH_ENABLE_GLOBALLY_PINGID_SAML = 'AUTH_ENABLE_GLOBALLY_PINGID_SAML',
    /* Needed to build a webhook with github. Needs to be a public URL as well,
     * because Github don't allow you to make a webhook vs localhost for security :()
     */
    BASE_URL = 'BASE_URL',
    // Outcoming mail configuration
    MAIL_TRANSPORT = 'MAIL_TRANSPORT',
    MAIL_FROM = 'MAIL_FROM',
    FRONTEND_URL = 'FRONTEND_URL',
    // Sftp configuration
    SFTP_HOST = 'SFTP_HOST',
    SFTP_PORT = 'SFTP_PORT',
    SFTP_USERNAME = 'SFTP_USERNAME',
    SFTP_PASSWORD = 'SFTP_PASSWORD',
    SFTP_DESTINATION_FOLDER = 'SFTP_DESTINATION_FOLDER',
    // SCS path
    STATIC_CONTENT_PREFIX = 'STATIC_CONTENT_PREFIX',
    // Reports path
    REPORT_PATH = 'REPORT_PATH',
    TMP_FOLDER_PATH = 'TMP_FOLDER_PATH',
    // Internal elasticsearch url
    ELASTICSEARCH_URL = 'ELASTICSEARCH_URL',
    // FRONTEND_URL
    // Verification email duration
    DURATION_HOURS_JWT_TOKEN = 'DURATION_HOURS_JWT_TOKEN',
    DURATION_HOURS_TOKEN_EMAIL_VERIFICATION = 'DURATION_HOURS_TOKEN_EMAIL_VERIFICATION',
    DURATION_MINUTES_TOKEN_RECOVERY_PASSWORD = 'DURATION_MINUTES_TOKEN_RECOVERY_PASSWORD',
    HCAPTCHA_ENABLED = 'HCAPTCHA_ENABLED',
    HCAPTCHA_SITE_KEY = 'HCAPTCHA_SITE_KEY',
    HCAPTCHA_SECRET_KEY = 'HCAPTCHA_SECRET_KEY',
    SERVICE_DESK_EMAIL = 'SERVICE_DESK_EMAIL',
    KYSO_INDEXER_API_BASE_URL = 'KYSO_INDEXER_API_BASE_URL',
    UNAUTHORIZED_REDIRECT_URL = 'UNAUTHORIZED_REDIRECT_URL',
    CUSTOMIZE_LOGIN_CENTRAL_LOGO_URL = 'CUSTOMIZE_LOGIN_CENTRAL_LOGO_URL',
    CUSTOMIZE_LOGIN_CENTRAL_REDIRECT_URL = 'CUSTOMIZE_LOGIN_CENTRAL_REDIRECT_URL',
    CUSTOMIZE_LOGIN_LEFT_LOGO_URL = 'CUSTOMIZE_LOGIN_LEFT_LOGO_URL',
    CUSTOMIZE_LOGIN_LEFT_REDIRECT_URL = 'CUSTOMIZE_LOGIN_LEFT_REDIRECT_URL',
    CUSTOMIZE_LOGIN_RIGHT_LOGO_URL = 'CUSTOMIZE_LOGIN_RIGHT_LOGO_URL',
    CUSTOMIZE_LOGIN_RIGHT_REDIRECT_URL = 'CUSTOMIZE_LOGIN_RIGHT_REDIRECT_URL',
    CUSTOMIZE_LOGIN_CSS_STYLES = 'CUSTOMIZE_LOGIN_CSS_STYLES',
    CUSTOMIZE_LOGIN_HEADER_CSS_STYLES = 'CUSTOMIZE_LOGIN_HEADER_CSS_STYLES',
    CUSTOMIZE_LOGIN_BUTTON_HOVER_CSS_STYLES = 'CUSTOMIZE_LOGIN_BUTTON_HOVER_CSS_STYLES',
    CUSTOMIZE_LOGIN_LINK_CSS_STYLES = 'CUSTOMIZE_LOGIN_LINK_CSS_STYLES',
    CUSTOMIZE_LOGIN_SHOWDIV_CSS_STYLES = 'CUSTOMIZE_LOGIN_SHOWDIV_CSS_STYLES',
    CUSTOMIZE_LOGIN_HIDDENDIV_CSS_STYLES = 'CUSTOMIZE_LOGIN_HIDDENDIV_CSS_STYLES',
    CUSTOMIZE_LOGIN_BUTTON_CSS_STYLES = 'CUSTOMIZE_LOGIN_BUTTON_CSS_STYLES',
    // NATS
    KYSO_NATS_URL = 'KYSO_NATS_URL',
    /**
     * If empty, has no effect. If has a value, adds any new user in the platform to the 
     * organizations set in this property (comma separated) with TEAM_READER role
     * 
     * examples: 
     *      "" --> Don't add to any organization
     *      "lightside" --> Adds new users (sign-up) to the "lightside" organization
     *      "lightside,darkside" --> --> Adds new users (sign-up) to "lightside" and darkside
     * 
     */
    ADD_NEW_USERS_AUTOMATICALLY_TO_ORG = "ADD_NEW_USERS_AUTOMATICALLY_TO_ORG",
    MAX_FILE_SIZE = "MAX_FILE_SIZE",
}
