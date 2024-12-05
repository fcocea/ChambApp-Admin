"use client";

import * as React from "react";
import {
  Bot,
  Megaphone,
  SquareTerminal
} from "lucide-react";

import { Logo } from "@/components/Logo";
import { NavMain } from "@/components/NavMain";
import { NavUser } from "@/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";

const data = {
  user: {
    name: "admin",
    email: "admin@chambapp.com",
    avatar: "/avatars/shadcn.jpg"
  },
  navMain: [
    {
      title: "Panel de control",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Resumen general",
          url: "/admin/panel/overview"
        },
        {
          title: "Estadísticas en tiempo real",
          url: "#"
        },
        {
          title: "Actividad reciente",
          url: "#"
        }
      ]
    },
    {
      title: "Gestión de usuarios",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Usuarios",
          url: "/admin/panel/user"
        },
        {
          title: "Solicitudes de chambers",
          url: "/admin/panel/chamber-request"
        },
        {
          title: "Usuarios suspendidos",
          url: "/admin/panel/suspended"
        }
      ]
    },
    {
      title: "Gestión de anuncios",
      url: "#",
      icon: Megaphone,
      items: [
        {
          title: "Publicaciones activas",
          url: "/admin/panel/advertisement"
        },
        {
          title: "Publicaciones completadas",
          url: "#"
        },
        {
          title: "Anuncios reportados",
          url: "/admin/panel/reported"
        }
      ]
    }
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#"
    //     },
    //     {
    //       title: "Team",
    //       url: "#"
    //     },
    //     {
    //       title: "Billing",
    //       url: "#"
    //     },
    //     {
    //       title: "Limits",
    //       url: "#"
    //     }
    //   ]
    // }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <a href="#">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Logo />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-semibold">ChambApp</span>
              <span className="">v1.0.0</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user ?? { name: "", email: "", avatar: null }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
