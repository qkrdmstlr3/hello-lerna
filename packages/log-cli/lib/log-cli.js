#!/usr/bin/env node

import { program } from 'commander'
import { logCore } from 'log-core'

// action
program.action(cmd => logCore())

program.parse(process.argv)
