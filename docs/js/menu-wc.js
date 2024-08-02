'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/logo.svg">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link" >AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' : 'data-bs-target="#xs-controllers-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' :
                                            'id="xs-controllers-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' }>
                                            <li class="link">
                                                <a href="controllers/AccountController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' : 'data-bs-target="#xs-injectables-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' :
                                        'id="xs-injectables-links-module-AccountModule-86c12d1cd268321098ecaf269a2e7217505a966aa6695fc96a82f14b14a0e8668e995ebe6d4528e0ddc207e36d4dcef42572cb3d8f5c532a3f8493d92f36e7e8"' }>
                                        <li class="link">
                                            <a href="injectables/AccountRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' :
                                            'id="xs-controllers-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' :
                                        'id="xs-injectables-links-module-AuthModule-e04a31d7096fb701849a22c1d0f5debf3c38aa03f9bdae559463c64b254ff4bd0f6ee4617e4ced93f6bda3913faf827b999d987fc7f8d9e9606fef12c25a7cea"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RefreshStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RefreshStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TokenService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VKIDService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VKIDService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VKIDStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VKIDStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigModule.html" data-type="entity-link" >ConfigModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' : 'data-bs-target="#xs-controllers-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' :
                                            'id="xs-controllers-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' }>
                                            <li class="link">
                                                <a href="controllers/ConfigController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' : 'data-bs-target="#xs-injectables-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' :
                                        'id="xs-injectables-links-module-ConfigModule-9d424507c67d45c9a6d3f9f1e10268d3fbbba52f5bda7a6fa3e26d89233042375f72f9fc8c44763d38539f72b80ea44b4a204bcfb987c1eea480d8d0d0f875d4"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-2b6d9d8c4efd575e8a976eaf9a69060ad8214ecb9d2e8ca70bd0475de592d29911a00bc376d05cb0071f9ca619922f7361141252e0302bda7db8a5359e04cec4"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-2b6d9d8c4efd575e8a976eaf9a69060ad8214ecb9d2e8ca70bd0475de592d29911a00bc376d05cb0071f9ca619922f7361141252e0302bda7db8a5359e04cec4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-2b6d9d8c4efd575e8a976eaf9a69060ad8214ecb9d2e8ca70bd0475de592d29911a00bc376d05cb0071f9ca619922f7361141252e0302bda7db8a5359e04cec4"' :
                                        'id="xs-injectables-links-module-CoreModule-2b6d9d8c4efd575e8a976eaf9a69060ad8214ecb9d2e8ca70bd0475de592d29911a00bc376d05cb0071f9ca619922f7361141252e0302bda7db8a5359e04cec4"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadModule.html" data-type="entity-link" >UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' : 'data-bs-target="#xs-controllers-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' :
                                            'id="xs-controllers-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' }>
                                            <li class="link">
                                                <a href="controllers/UploadController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' : 'data-bs-target="#xs-injectables-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' :
                                        'id="xs-injectables-links-module-UploadModule-50438efad4d6a065a489d0fdd0979ac1695cc3149447390e13adbb5f3fd632a58b28cd9e00f6257b7163ea3a01e474a26b3dacb4312ae53be8a017b9efeb3fd4"' }>
                                        <li class="link">
                                            <a href="injectables/UploadRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UploadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VKIDModule.html" data-type="entity-link" >VKIDModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' : 'data-bs-target="#xs-controllers-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' :
                                            'id="xs-controllers-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' }>
                                            <li class="link">
                                                <a href="controllers/VKIDController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VKIDController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' : 'data-bs-target="#xs-injectables-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' :
                                        'id="xs-injectables-links-module-VKIDModule-defdf03e770a9436756fe140531dcb59c4a174ef1d13a6ef405a21314015a7d1bd4d26cddc8ee3a63f0925400a7e586817b637fe47197f2cbf2f2838e067abc2"' }>
                                        <li class="link">
                                            <a href="injectables/VKIDService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VKIDService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AccountController.html" data-type="entity-link" >AccountController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ConfigController.html" data-type="entity-link" >ConfigController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UploadController.html" data-type="entity-link" >UploadController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VKIDController.html" data-type="entity-link" >VKIDController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountResolver.html" data-type="entity-link" >AccountResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/APIError.html" data-type="entity-link" >APIError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cookies.html" data-type="entity-link" >Cookies</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAccountsDto.html" data-type="entity-link" >GetAccountsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUploadsDto.html" data-type="entity-link" >GetUploadsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HandledExceptionFilter.html" data-type="entity-link" >HandledExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogoutDto.html" data-type="entity-link" >LogoutDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationWithFilters.html" data-type="entity-link" >PaginationWithFilters</a>
                            </li>
                            <li class="link">
                                <a href="classes/PutFileDto.html" data-type="entity-link" >PutFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokensDto.html" data-type="entity-link" >RefreshTokensDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveAvatarDto.html" data-type="entity-link" >RemoveAvatarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/S3File.html" data-type="entity-link" >S3File</a>
                            </li>
                            <li class="link">
                                <a href="classes/SentryFilter.html" data-type="entity-link" >SentryFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateConfigDto.html" data-type="entity-link" >UpdateConfigDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadAvatarDto.html" data-type="entity-link" >UploadAvatarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UploadResolver.html" data-type="entity-link" >UploadResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/VKID_EXCHANGE_TOKEN_PAYLOAD.html" data-type="entity-link" >VKID_EXCHANGE_TOKEN_PAYLOAD</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountRepository.html" data-type="entity-link" >AccountRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigService.html" data-type="entity-link" >ConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GqlJwtGuard.html" data-type="entity-link" >GqlJwtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalGuard.html" data-type="entity-link" >LocalGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshGuard.html" data-type="entity-link" >RefreshGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshStrategy.html" data-type="entity-link" >RefreshStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadRepository.html" data-type="entity-link" >UploadRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadService.html" data-type="entity-link" >UploadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VKIDGuard.html" data-type="entity-link" >VKIDGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VKIDService.html" data-type="entity-link" >VKIDService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VKIDStrategy.html" data-type="entity-link" >VKIDStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthenticatedUser.html" data-type="entity-link" >AuthenticatedUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraphqlError.html" data-type="entity-link" >GraphqlError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HttpError.html" data-type="entity-link" >HttpError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tokens.html" data-type="entity-link" >Tokens</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokensResponse.html" data-type="entity-link" >TokensResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VKIDUser.html" data-type="entity-link" >VKIDUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});