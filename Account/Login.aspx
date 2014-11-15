<%@ Page Title="Log in | Volleyball Playas" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="VolleyballPlayas.WebUI.Account.Login" Async="true" %>

<%@ Register Src="~/Account/OpenAuthProviders.ascx" TagPrefix="uc" TagName="OpenAuthProviders" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <div role="main" class="main">

        <section class="page-top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="breadcrumb">
                            <li><a id="aHome" runat="server" href="~/">Home</a></li>
                            <li class="active">Log In</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Log In</h2>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">

            <div class="row">
                <div class="col-md-6">
                    <div>
                        <div class="row formContact">
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label>Email address </label>
                                    <input runat="server" type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="txtEmail" id="txtEmail">
                                </div>
                            </div>
                        </div>
                        <div class="row formContact">
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label>Password</label>
                                    <input runat="server" type="password" id="txtPassword" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <div id="formContactMessages">
                            <div <asp:Literal runat="server" ID="litFailureVisible" Text="class = 'alert alert-danger hidden'" /> id='contactError'>
                                <strong>Error:</strong> <span id="errorMsg"><asp:Literal runat="server" ID="FailureText"  Text="hidden"/></span>
                            </div>
                        </div>

                        <div class="row formContact">
                            <div class="col-md-12 contact-bottom">
                                <asp:Button runat="server" OnClick="LogIn" Text="Log in" OnClientClick="if(!ValidateLogin()) { return false;}" CssClass="btn btn-default" />
                           </div>

                        </div>
                        <div class="row formContact">
                            <div class="col-md-6">
                                <asp:HyperLink runat="server" ID="ForgotPasswordHyperLink" ViewStateMode="Disabled">Forgot your password?</asp:HyperLink>
                            </div>
                            <div class="col-md-6">
                                <asp:HyperLink runat="server" ID="aRegister" ViewStateMode="Disabled">Register as a new user</asp:HyperLink>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    </div>


</asp:Content>
