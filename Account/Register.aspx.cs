using System;
using System.Linq;
using System.Web;
using System.Web.UI;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Owin;
using VolleyballPlayas.WebUI.Models;
using VolleyballPlayas.WebUI.Helper;
using VolleyballPlayas.Business.Domain.Enumerations;

namespace VolleyballPlayas.WebUI.Account
{
    public partial class Register : Page
    {
        protected void CreateUser_Click(object sender, EventArgs e)
        {
            var manager = Context.GetOwinContext().GetUserManager<ApplicationUserManager>();
            var region = Mapper.MapRegionEnum(Region.SelectedValue);
            if (region == RegionEnum.None)
            {
                ErrorMessage.Text = "Region is invalid.";
            }
            else
            {
                var user = new ApplicationUser()
                {
                    UserName = Email.Text
                    ,
                    Email = Email.Text
                    ,
                    FirstName = FirstName.Text
                    ,
                    LastName = LastName.Text
                    ,
                    RoleId = Convert.ToInt32(RoleEnum.User)
                    ,
                    UserStatusId = Convert.ToInt32(UserStatusEnum.Unverified)
                    ,
                    RegionId = Convert.ToInt32(region)
                };
                IdentityResult result = manager.Create(user, Password.Text);
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=320771
                    //string code = manager.GenerateEmailConfirmationToken(user.Id);
                    //string callbackUrl = IdentityHelper.GetUserConfirmationRedirectUrl(code, user.Id, Request);
                    //manager.SendEmail(user.Id, "Confirm your account", "Please confirm your account by clicking <a href=\"" + callbackUrl + "\">here</a>.");

                    IdentityHelper.SignIn(manager, user, isPersistent: false);
                    IdentityHelper.RedirectToReturnUrl(Request.QueryString["ReturnUrl"], Response);
                }
                else
                {
                    ErrorMessage.Text = result.Errors.FirstOrDefault();
                }
            }
        }
    }
}