<template>
    <div class="shop-page-wrapper">
        <HeaderWithTopbar containerClass="container" />
        <Breadcrumb pageTitle="my-account" />

        <div class="my-account-area pb-80 pt-100" v-if="loaded">
            <div class="container">
                <div class="row">
                    <div class="ms-auto me-auto col-lg-9">
                        <div class="my-account-wrapper">
                            <div id="faq" class="panel-group">
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>1 .</span> <a data-bs-toggle="collapse"
                                                href="#my-account-1">Your Information </a></h3>
                                    </div>
                                    <div id="my-account-1" class="panel-collapse collapse show" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <div class="account-info-wrapper">
                                                    Personal Details
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Full Name</label>
                                                            <input disabled type="text" :value="user.name">
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Email Address</label>
                                                            <input disabled type="email" :value="user.email">
                                                        </div>
                                                    </div>
                                                    <div class="billing-back-btn">
                                                        <div class="billing-back">
                                                            <!-- <a href="#"><i class="fa fa-arrow-up"></i> back</a> -->
                                                        </div>
                                                        <div class="billing-btn">
                                                            <button v-on:click="logout" type="submit">Logout</button>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Telephone</label>
                                                            <input type="text">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <div class="billing-info">
                                                            <label>Fax</label>
                                                            <input type="text">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div>
                                                    <div class="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div> -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>2 .</span> <a data-bs-toggle="collapse"
                                                href="#my-account-2">Change your password </a></h3>
                                    </div>
                                    <div id="my-account-2" class="panel-collapse collapse" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <div class="account-info-wrapper">
                                                    <h4>Change Password</h4>
                                                    <h5>Your Password</h5>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Password</label>
                                                            <input type="password">
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="billing-info">
                                                            <label>Password Confirm</label>
                                                            <input type="password">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div>
                                                    <div class="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default single-my-account">
                                    <div class="panel-heading my-account-title">
                                        <h3 class="panel-title"><span>3 .</span> <a data-bs-toggle="collapse"
                                                href="#my-account-3">Modify your address book entries </a></h3>
                                    </div>
                                    <div id="my-account-3" class="panel-collapse collapse" data-bs-parent="#faq">
                                        <div class="panel-body">
                                            <div class="myaccount-info-wrapper">
                                                <div class="account-info-wrapper">
                                                    <h4>Address Book Entries</h4>
                                                </div>
                                                <div class="entries-wrapper">
                                                    <div class="row">
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div class="entries-info text-center">
                                                                <p>Keith L. Castro </p>
                                                                <p> 559 Pratt Avenue </p>
                                                                <p> Orchards, WA 98662 </p>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="col-md-6 d-flex align-items-center justify-content-center">
                                                            <div class="entries-edit-delete text-center">
                                                                <button class="edit">Edit</button>
                                                                <button>Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="billing-back-btn">
                                                    <div class="billing-back">
                                                        <a href="#"><i class="fa fa-arrow-up"></i> back</a>
                                                    </div>
                                                    <div class="billing-btn">
                                                        <button type="submit">Continue</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
export default {
    components: {
        HeaderWithTopbar: () => import("@/components/HeaderWithTopbar"),
        Breadcrumb: () => import("@/components/Breadcrumb"),
        TheFooter: () => import("@/components/TheFooter"),
    },
    data() {
        return {
            user: null,
            loaded: false,
        };
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            window.location = '/login-register';
        }
    },
    mounted() {
        const user = localStorage.getItem('user');
        if (!user) window.location = '/login-register';
        this.user = JSON.parse(user);
        this.loaded = true;
    },
    head() {
        return {
            title: "My Account"
        }
    }
}
</script>
