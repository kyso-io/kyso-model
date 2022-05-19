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
    // Auth enabling
    AUTH_ENABLE_GLOBALLY_GOOGLE = 'AUTH_ENABLE_GLOBALLY_GOOGLE',
    AUTH_ENABLE_GLOBALLY_GITHUB = 'AUTH_ENABLE_GLOBALLY_GITHUB',
    AUTH_ENABLE_GLOBALLY_BITBUCKET = 'AUTH_ENABLE_GLOBALLY_BITBUCKET',
    AUTH_ENABLE_GLOBALLY_GITLAB = 'AUTH_ENABLE_GLOBALLY_GITLAB',
    AUTH_ENABLE_GLOBALLY_KYSO = 'AUTH_ENABLE_GLOBALLY_KYSO',
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
    DURATION_HOURS_TOKEN_EMAIL_VERIFICATION = 'DURATION_HOURS_TOKEN_EMAIL_VERIFICATION',
    DURATION_MINUTES_TOKEN_RECOVERY_PASSWORD = 'DURATION_MINUTES_TOKEN_RECOVERY_PASSWORD',
    RECAPTCHA2_ENABLED = 'RECAPTCHA2_ENABLED',
    RECAPTCHA2_SITE_KEY = 'RECAPTCHA2_SITE_KEY',
    RECAPTCHA2_SECRET_KEY = 'RECAPTCHA2_SECRET_KEY',
    SERVICE_DESK_EMAIL = 'SERVICE_DESK_EMAIL',
    KYSO_INDEXER_API_BASE_URL = 'KYSO_INDEXER_API_BASE_URL',
}