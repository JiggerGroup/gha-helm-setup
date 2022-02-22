import * as core from '@actions/core'
import { exec } from '@actions/exec'
import install from './install'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')

    install(version)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
