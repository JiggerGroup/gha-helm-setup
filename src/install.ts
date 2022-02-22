import { exec } from "@actions/exec"

const install = async (version: string) => {
    await exec(`curl -sSL https://get.helm.sh/helm-v${version}-linux-amd64.tar.gz -o helm.tar.gz`)
    await exec("tar xz -f helm.tar.gz")
    await exec("mv linux-amd64/helm /usr/local/bin/helm")
    await exec("rm -rf linux-amd64")
}

export default install
