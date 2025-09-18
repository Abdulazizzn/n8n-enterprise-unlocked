# n8n Enterprise Unlocked 🚀

A modified version of [n8n](https://github.com/n8n-io/n8n) workflow automation platform with **all enterprise features unlocked** and **no license restrictions**.

## ⚡ What's Unlocked

This version bypasses all license checks and enables the complete suite of n8n enterprise features:

### 🔐 Authentication & Security
- ✅ **LDAP Authentication** - Enterprise directory integration
- ✅ **SAML SSO** - Single sign-on capabilities
- ✅ **Advanced User Management** - Unlimited users and roles
- ✅ **External Secrets Management** - Enterprise secrets integration

### 📊 Advanced Features  
- ✅ **API Access** - Full REST API without restrictions
- ✅ **Advanced Workflows** - Unlimited active workflows
- ✅ **Variables Management** - Unlimited environment variables
- ✅ **Workflow History** - Complete execution history and versioning
- ✅ **Team Projects** - Unlimited project collaboration
- ✅ **Source Control** - Git integration for workflows

### 🤖 AI & Analytics
- ✅ **AI Assistant** - Unlimited AI credits and features
- ✅ **Insights & Analytics** - Full execution analytics and monitoring
- ✅ **Log Streaming** - Advanced monitoring capabilities

### 🔧 Development & Customization
- ✅ **Community Nodes** - Install any community packages
- ✅ **Custom Node Development** - Full development environment

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20.19 - 24.x
- pnpm (package manager)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdulazizzn/n8n-enterprise-unlocked.git
   cd n8n-enterprise-unlocked
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build the project**
   ```bash
   pnpm build
   ```

4. **Start n8n**
   ```bash
   cd packages/cli && pnpm dev
   ```

5. **Access n8n**
   Open your browser to `http://localhost:5678`

## 🔧 Technical Implementation

### Modified Components

1. **License Service** (`packages/cli/src/license.ts`)
   - `isLicensed()` → Always returns `true`
   - `getValue()` → Returns unlimited quotas (`-1`)
   - `getPlanName()` → Returns `"Enterprise"`

2. **License State** (`packages/@n8n/backend-common/src/license-state.ts`)
   - All license checks bypass to `true`
   - All quota methods return unlimited values

3. **Frontend Checks** (`packages/frontend/editor-ui/src/utils/rbac/checks/isEnterpriseFeatureEnabled.ts`)
   - Enterprise feature detection always returns `true`

4. **API Middleware** (`packages/cli/src/public-api/v1/shared/middlewares/global.middleware.ts`)
   - License validation middleware bypassed

### Code Preservation
- All original code is preserved with `// BYPASSED:` comments
- Easy to revert changes if needed
- No destructive modifications

## 🚨 Important Notes

### Legal Considerations
- This is for **educational and development purposes only**
- Please respect n8n's [license terms](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) for production use
- Consider purchasing a legitimate enterprise license for commercial deployments

### Production Usage
- Test thoroughly before production use
- Monitor for any unexpected behavior
- Keep backups of your workflows and data

### Updates
- This version is based on n8n v1.112.0
- Future updates will require re-applying the license bypasses

## 🔄 Development

### Building from Source
```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start in development mode
cd packages/cli && pnpm dev
```

### Running Tests
```bash
# Run tests
pnpm test

# Run specific package tests
pnpm --filter=n8n test
```

## 📋 Feature Verification

After installation, verify that enterprise features are enabled:

1. **Check License Status**: No license warnings should appear
2. **LDAP/SAML**: Authentication options available in settings
3. **API Access**: Full API endpoints accessible
4. **User Management**: Unlimited user creation
5. **Variables**: Environment variables management available
6. **Workflow History**: Version history accessible
7. **AI Features**: AI assistant available without credit limits

## 🤝 Contributing

This is a community fork focused on educational purposes. For the official n8n project:
- Visit [n8n.io](https://n8n.io)
- Official repository: [github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

## 📄 License

This project maintains the same license structure as the original n8n:
- **n8n core**: [Apache 2.0 with Commons Clause](https://github.com/n8n-io/n8n/blob/master/LICENSE.md)
- **n8n Enterprise**: Enterprise features unlocked for educational use

## ⚠️ Disclaimer

This modified version is provided "as is" for educational and development purposes. The maintainers are not responsible for any issues arising from its use. Please use responsibly and consider supporting the original n8n project.

---

**Original n8n Project**: [n8n.io](https://n8n.io) | [GitHub](https://github.com/n8n-io/n8n)

**Modified by**: Community contributors for educational purposes