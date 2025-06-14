import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, styled, Tooltip, Typography, useTheme } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  Dashboard,
  HelpOutline,
  MapOutlined,
  PeopleOutlined,
  Person2Outlined,
  PieChartOutlined,
  ReceiptOutlined,
  TimelineOutlined
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
      }
    }
  ]
}));
const array1 = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlined />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlined />,
    path: "/contacts"
  },
  { text: "Invoices Balances", icon: <ReceiptOutlined />, path: "/invoices" }
];
const array2 = [
  { text: "Profile Form", icon: <Person2Outlined />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
  { text: "FAQ Page", icon: <HelpOutline />, path: "/faq" }
];
const array3 = [
  { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlined />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" }
];
const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      // @ts-ignore
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Avatar
        sx={{
          transition: "0.3s",
          mx: "auto",
          width: open ? "88px" : "44px",
          height: open ? "88px" : "44px",
          my: 1
        }}
        alt="Admin Profile Picture"
        src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
      />
      <Typography
        align="center"
        variant="body1"
        sx={{ transition: "0.3s", fontSize: open ? 17 : 0 }}
      >
        Mohamed
      </Typography>
      <Typography
        align="center"
        variant="body1"
        sx={{
          transition: "0.3s",
          fontSize: open ? 17 : 0,
          color: theme.palette.info.main
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {array1.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate(item.path);
            }}
          >
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "light"
                          ? grey[300]
                          : grey[800]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array2.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate(item.path);
            }}
          >
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "light"
                          ? grey[300]
                          : grey[800]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array3.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate(item.path);
            }}
          >
            <Tooltip title={!open && item.text} placement="right">
              <ListItemButton
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    bgcolor:
                      location.pathname === item.path
                        ? theme.palette.mode === "light"
                          ? grey[300]
                          : grey[800]
                        : null
                  },
                  open
                    ? {
                        justifyContent: "initial"
                      }
                    : {
                        justifyContent: "center"
                      }
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center"
                    },
                    open
                      ? {
                          mr: 3
                        }
                      : {
                          mr: "auto"
                        }
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1
                        }
                      : {
                          opacity: 0
                        }
                  ]}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
