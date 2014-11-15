namespace VolleyballPlayas.WebUI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigrations : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.AspNetUsers", "FirstName");
            DropColumn("dbo.AspNetUsers", "LastName");
            DropColumn("dbo.AspNetUsers", "ZipCode");
            DropColumn("dbo.AspNetUsers", "PreferredRadius");
            DropColumn("dbo.AspNetUsers", "BirthDate");
            DropColumn("dbo.AspNetUsers", "RoleId");
            DropColumn("dbo.AspNetUsers", "GenderId");
            DropColumn("dbo.AspNetUsers", "RegionId");
            DropColumn("dbo.AspNetUsers", "SkillLevelId");
            DropColumn("dbo.AspNetUsers", "UserStatusId");
            DropColumn("dbo.AspNetUsers", "PaypalVerifiedStatusId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "PaypalVerifiedStatusId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "UserStatusId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "SkillLevelId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "RegionId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "GenderId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "RoleId", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "BirthDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.AspNetUsers", "PreferredRadius", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "ZipCode", c => c.String());
            AddColumn("dbo.AspNetUsers", "LastName", c => c.String());
            AddColumn("dbo.AspNetUsers", "FirstName", c => c.String());
        }
    }
}
