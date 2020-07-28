# How to use

You must have an aws access id, and aws secret key, to change any part of the infrastructure.
Example:

// terraform.tfvars
```
aws_access_key = "YOUR ACCESS KEY"

aws_secret_key = "YOUR SECRET KEY"

website_domain = "issues.elvisgastelum.com"

website_subdomain = "issues"

region = "us-west-1"

website_bucket_name = "issues.elvisgastelum.com"

project_name = "react-issues"

website_zone = "elvisgastelum.com."
```

and apply the changes
```bash
~$ terraform plan
~$ terraform apply
```