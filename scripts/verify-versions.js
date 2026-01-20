#!/usr/bin/env node

/**
 * Version Verification Script
 * Ensures Next.js and React versions meet security requirements
 * CVE-2025-55182, CVE-2025-55184, CVE-2025-67779
 */

const fs = require('fs');
const path = require('path');

// Security Requirements
const MIN_NEXT_VERSION = '16.0.10';
const MIN_REACT_VERSIONS = ['19.0.3', '19.1.4', '19.2.3'];

function parseVersion(version) {
    // Remove ^ or ~ prefix
    const cleanVersion = version.replace(/^[\^~]/, '');
    const parts = cleanVersion.split('.').map(Number);
    return {
        major: parts[0] || 0,
        minor: parts[1] || 0,
        patch: parts[2] || 0,
        original: version,
        clean: cleanVersion
    };
}

function compareVersions(v1, v2) {
    // Returns: 1 if v1 > v2, -1 if v1 < v2, 0 if equal
    if (v1.major !== v2.major) return v1.major > v2.major ? 1 : -1;
    if (v1.minor !== v2.minor) return v1.minor > v2.minor ? 1 : -1;
    if (v1.patch !== v2.patch) return v1.patch > v2.patch ? 1 : -1;
    return 0;
}

function checkVersion() {
    const packageJsonPath = path.join(process.cwd(), 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
        console.error('❌ ERROR: package.json not found');
        process.exit(1);
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

    let hasErrors = false;

    // Check Next.js version
    if (dependencies.next) {
        const nextVersion = parseVersion(dependencies.next);
        const minNextVersion = parseVersion(MIN_NEXT_VERSION);

        if (compareVersions(nextVersion, minNextVersion) < 0) {
            console.error(`❌ SECURITY VIOLATION: Next.js version ${nextVersion.clean} is below minimum ${MIN_NEXT_VERSION}`);
            console.error(`   CVE-2025-55182, CVE-2025-55184, CVE-2025-67779`);
            hasErrors = true;
        } else {
            console.log(`✅ Next.js version ${nextVersion.clean} meets security requirements (>= ${MIN_NEXT_VERSION})`);
        }
    } else {
        console.error('❌ ERROR: Next.js not found in dependencies');
        hasErrors = true;
    }

    // Check React version
    if (dependencies.react) {
        const reactVersion = parseVersion(dependencies.react);
        const minReactVersion = parseVersion(MIN_REACT_VERSIONS[0]); // Use lowest acceptable version

        if (compareVersions(reactVersion, minReactVersion) < 0) {
            console.error(`❌ SECURITY VIOLATION: React version ${reactVersion.clean} is below minimum ${MIN_REACT_VERSIONS[0]}`);
            console.error(`   Acceptable versions: ${MIN_REACT_VERSIONS.join(', ')} or higher`);
            hasErrors = true;
        } else {
            console.log(`✅ React version ${reactVersion.clean} meets security requirements (>= ${MIN_REACT_VERSIONS[0]})`);
        }
    } else {
        console.error('❌ ERROR: React not found in dependencies');
        hasErrors = true;
    }

    if (hasErrors) {
        console.error('\n🛡️  SECURITY CHECK FAILED - Please upgrade dependencies');
        process.exit(1);
    }

    console.log('\n🛡️  All security version checks passed!');
    process.exit(0);
}

checkVersion();
